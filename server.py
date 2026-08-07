#!/usr/bin/env python3
"""Serve the static tutorial site for local development."""

from argparse import ArgumentParser
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


def main() -> None:
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8765)
    args = parser.parse_args()

    site_directory = Path(__file__).resolve().parent / "public"
    handler = partial(SimpleHTTPRequestHandler, directory=site_directory)
    server = ThreadingHTTPServer((args.host, args.port), handler)

    print(f"Serving {site_directory} at http://{args.host}:{args.port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
