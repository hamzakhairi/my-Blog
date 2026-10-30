export interface Script {
  slug: string;
  title: string;
  description: string;
  category: "python" | "bash" | "c";
  tags: string[];
  featured: boolean;
  updatedAt: string;
  href: string;
  github: string;
}

export const Scripts : Script[]  = [
  {
    "slug": "cve-2099-10001",
    "title": "CVE-2099-10001",
    "description": "A Python proof of concept demonstrating a fictional input validation vulnerability in a local lab.",
    "category": "python",
    "tags": ["proof-of-concept", "web"],
    "featured": true,
    "updatedAt": "2026-10-30",
    "href": "/scripts/cve-2099-10001",
    "github": "https://github.com/example/cve-2099-10001"
  },
  {
    "slug": "cve-2099-10002",
    "title": "CVE-2099-10002",
    "description": "A Python tool for checking a fictional directory traversal issue in a test application.",
    "category": "python",
    "tags": ["proof-of-concept", "validation"],
    "featured": false,
    "updatedAt": "2026-10-28",
    "href": "/scripts/cve-2099-10002",
    "github": "https://github.com/example/cve-2099-10002"
  },
  {
    "slug": "linux-enum",
    "title": "LinuxEnum",
    "description": "Collect system information, user permissions, running services, and scheduled tasks.",
    "category": "bash",
    "tags": ["linux", "enumeration"],
    "featured": false,
    "updatedAt": "2026-10-27",
    "href": "/scripts/linux-enum",
    "github": "https://github.com/example/linux-enum"
  },
  {
    "slug": "log-watch",
    "title": "LogWatch",
    "description": "Filter authentication logs and highlight failed login attempts.",
    "category": "bash",
    "tags": ["logging", "monitoring"],
    "featured": false,
    "updatedAt": "2026-10-25",
    "href": "/scripts/log-watch",
    "github": "https://github.com/example/log-watch"
  },
  {
    "slug": "socket-probe",
    "title": "SocketProbe",
    "description": "A small TCP client for checking connectivity and inspecting service banners.",
    "category": "c",
    "tags": ["networking", "sockets"],
    "featured": true,
    "updatedAt": "2026-10-24",
    "href": "/scripts/socket-probe",
    "github": "https://github.com/example/socket-probe"
  },
  {
    "slug": "hex-view",
    "title": "HexView",
    "description": "Inspect binary files with hexadecimal output and readable ASCII.",
    "category": "c",
    "tags": ["binary", "utilities"],
    "featured": false,
    "updatedAt": "2026-10-22",
    "href": "/scripts/hex-view",
    "github": "https://github.com/example/hex-view"
  }
]