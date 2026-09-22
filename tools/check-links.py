#!/usr/bin/env python3
"""Checa links internos e âncoras dos HTMLs estáticos do site.

Uso: python3 tools/check-links.py website
Ignora URLs externas (http/https), mailto:, tel:, data:.
Falha (exit 1) se algum arquivo ou âncora interna não existir.
"""
import sys
from html.parser import HTMLParser
from pathlib import Path


class LinkCollector(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links: list[tuple[str, int]] = []  # (url, linha)
        self.ids: set[str] = set()

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a and a["id"]:
            self.ids.add(a["id"])
        for attr in ("href", "src"):
            if a.get(attr):
                self.links.append((a[attr], self.getpos()[0]))


SKIP_PREFIXES = ("http://", "https://", "//", "mailto:", "tel:", "data:", "javascript:")


def main() -> int:
    root = Path(sys.argv[1] if len(sys.argv) > 1 else "website").resolve()
    html_files = sorted(root.rglob("*.html"))
    if not html_files:
        print("Nenhum HTML encontrado.")
        return 1

    ids_by_file: dict[Path, set[str]] = {}
    links_by_file: dict[Path, list[tuple[str, int]]] = {}
    for f in html_files:
        parser = LinkCollector()
        parser.feed(f.read_text(encoding="utf-8"))
        ids_by_file[f] = parser.ids
        links_by_file[f] = parser.links

    errors = 0
    for f, links in links_by_file.items():
        for url, line in links:
            if url.startswith(SKIP_PREFIXES):
                continue
            target_part, _, anchor = url.partition("#")
            if target_part.startswith("/"):
                target = (root / target_part.lstrip("/")).resolve()
            else:
                target = (f.parent / target_part).resolve() if target_part else f
            try:
                target.relative_to(root)
            except ValueError:
                print(f"ERRO {f.relative_to(root)}:{line} → fora da raiz: {url}")
                errors += 1
                continue
            if not target.is_file():
                print(f"ERRO {f.relative_to(root)}:{line} → arquivo inexistente: {url}")
                errors += 1
            elif anchor and anchor not in ids_by_file.get(target, set()):
                print(f"ERRO {f.relative_to(root)}:{line} → âncora #{anchor} inexistente em {url}")
                errors += 1

    print(f"{len(html_files)} HTML(s) verificados, {errors} erro(s).")
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
