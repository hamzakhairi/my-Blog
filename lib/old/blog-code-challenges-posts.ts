import type { PostBlock } from "../posts";


export type PostSection = {
  id?: string;
  title: string;
  blocks: PostBlock[];
};

export type Post = {
  slug: string;

  title: string;
  description: string;

  category: "NOTES" | "WRITEUP";

  author: {
    name: string;
    initials: string;
  };

  date: string;
  readTime: string;

  tags: string[];

  cover?: string;

  // Code challenges
  difficulty?: "Easy" | "Medium" | "Hard";
  language?: string;

  // Hack The Box machines
  box?: {
    os: string;
    difficulty: string;
    points: number;
    released: string;
  };

  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "hack-the-box-layover-writeup-1",

    title: "Hack The Box Layover — Full Writeup",

    description:
      "A complete step-by-step penetration testing walkthrough of the HTB Layover machine.",

    category: "WRITEUP",

    author: {
      name: "Hamza khairi",
      initials: "HK",
    },

    date: "2026-09-26",
    readTime: "35 min read",

    tags: [
      "Prtswiger",
      "Layover",
      "Linux",
      "Medium",
      "Web",
      "Privilege Escalation",
    ],

    cover: "/HTB/Layover.png",

    box: {
      os: "Linux",
      difficulty: "Medium",
      points: 30,
      released: "2026-09-26",
    },

    sections: [
      {
        title: "Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "I started by identifying the target and scanning all available TCP ports.",
          },

          {
            type: "command",
            command: "nmap -sC -sV -p- 10.10.11.20",

            output: `PORT   STATE SERVICE VERSION
22/tcp open  ssh
80/tcp open  http
443/tcp open https`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Nmap scan results",
            caption: "Initial full-port Nmap scan.",
          },

          {
            type: "paragraph",
            text: "The scan revealed SSH and HTTP services, so I decided to investigate the web application first.",
          },
        ],
      },

      {
        title: "Web Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "Opening the HTTP service revealed a web application.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Layover web application",
          },

          {
            type: "heading",
            text: "Directory discovery",
          },

          {
            type: "command",
            command:
              "ffuf -u http://10.10.11.20/FUZZ -w /usr/share/wordlists/dirb/common.txt",

            output: `admin
login
uploads
api`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "FFUF results",
            caption: "Interesting directories discovered with FFUF.",
          },
        ],
      },

      {
        title: "Initial Access",

        blocks: [
          {
            type: "paragraph",
            text: "The application contained an endpoint that allowed interaction with the backend.",
          },

          {
            type: "note",
            title: "Important",
            text: "The vulnerable parameter only worked when the request was sent using the expected HTTP method.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Modified HTTP request",
          },

          {
            type: "code",
            language: "http",
            code: `POST /api/search HTTP/1.1
Host: 10.10.11.20
Content-Type: application/json

{
  "query": "test"
}`,
          },

          {
            type: "paragraph",
            text: "After modifying the request, I obtained the initial foothold.",
          },
        ],
      },

      {
        title: "Shell Stabilization",

        blocks: [
          {
            type: "paragraph",
            text: "The initial shell was unstable, so I upgraded it to a proper interactive shell.",
          },

          {
            type: "command",
            command:
              "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
          },

          {
            type: "command",
            command: "export TERM=xterm",
          },

          {
            type: "paragraph",
            text: "The shell was now much easier to work with.",
          },
        ],
      },

      {
        title: "Privilege Escalation",

        blocks: [
          {
            type: "paragraph",
            text: "I started local enumeration by checking the current user's sudo permissions.",
          },

          {
            type: "command",
            command: "sudo -l",

            output: `User www-data may run the following commands:
    (root) NOPASSWD: /usr/bin/example`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "sudo permissions",
          },

          {
            type: "heading",
            text: "Abusing the allowed binary",
          },

          {
            type: "paragraph",
            text: "The allowed binary could be abused to execute commands with elevated privileges.",
          },

          {
            type: "command",
            command: "sudo /usr/bin/example ...",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Root shell",
            caption: "Root access obtained.",
          },
        ],
      },

      {
        title: "Flags",

        blocks: [
          {
            type: "heading",
            text: "User flag",
          },

          {
            type: "command",
            command: "cat /home/user/user.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },

          {
            type: "heading",
            text: "Root flag",
          },

          {
            type: "command",
            command: "cat /root/root.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },
        ],
      },

      {
        title: "Final Thoughts",

        blocks: [
          {
            type: "paragraph",
            text: "Layover was a good example of how web enumeration can eventually lead to local privilege escalation.",
          },

          {
            type: "list",
            items: [
              "Enumerate every exposed service.",
              "Understand the web application's attack surface.",
              "Investigate unusual HTTP behavior.",
              "Enumerate the local system after obtaining a shell.",
              "Always check sudo permissions.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "hack-the-box-layover-writeup-2",

    title: "Hack The Box Layover — Full Writeup",

    description:
      "A complete step-by-step penetration testing walkthrough of the HTB Layover machine.",

    category: "WRITEUP",

    author: {
      name: "Hamza khairi",
      initials: "HK",
    },

    date: "2026-09-26",
    readTime: "35 min read",

    tags: [
      "HackTheBox",
      "Layover",
      "Linux",
      "Medium",
      "Web",
      "Privilege Escalation",
    ],

    cover: "/HTB/Layover.png",

    box: {
      os: "Linux",
      difficulty: "Medium",
      points: 30,
      released: "2026-09-26",
    },

    sections: [
      {
        title: "Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "I started by identifying the target and scanning all available TCP ports.",
          },

          {
            type: "command",
            command: "nmap -sC -sV -p- 10.10.11.20",

            output: `PORT   STATE SERVICE VERSION
22/tcp open  ssh
80/tcp open  http
443/tcp open https`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Nmap scan results",
            caption: "Initial full-port Nmap scan.",
          },

          {
            type: "paragraph",
            text: "The scan revealed SSH and HTTP services, so I decided to investigate the web application first.",
          },
        ],
      },

      {
        title: "Web Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "Opening the HTTP service revealed a web application.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Layover web application",
          },

          {
            type: "heading",
            text: "Directory discovery",
          },

          {
            type: "command",
            command:
              "ffuf -u http://10.10.11.20/FUZZ -w /usr/share/wordlists/dirb/common.txt",

            output: `admin
login
uploads
api`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "FFUF results",
            caption: "Interesting directories discovered with FFUF.",
          },
        ],
      },

      {
        title: "Initial Access",

        blocks: [
          {
            type: "paragraph",
            text: "The application contained an endpoint that allowed interaction with the backend.",
          },

          {
            type: "note",
            title: "Important",
            text: "The vulnerable parameter only worked when the request was sent using the expected HTTP method.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Modified HTTP request",
          },

          {
            type: "code",
            language: "http",
            code: `POST /api/search HTTP/1.1
Host: 10.10.11.20
Content-Type: application/json

{
  "query": "test"
}`,
          },

          {
            type: "paragraph",
            text: "After modifying the request, I obtained the initial foothold.",
          },
        ],
      },

      {
        title: "Shell Stabilization",

        blocks: [
          {
            type: "paragraph",
            text: "The initial shell was unstable, so I upgraded it to a proper interactive shell.",
          },

          {
            type: "command",
            command:
              "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
          },

          {
            type: "command",
            command: "export TERM=xterm",
          },

          {
            type: "paragraph",
            text: "The shell was now much easier to work with.",
          },
        ],
      },

      {
        title: "Privilege Escalation",

        blocks: [
          {
            type: "paragraph",
            text: "I started local enumeration by checking the current user's sudo permissions.",
          },

          {
            type: "command",
            command: "sudo -l",

            output: `User www-data may run the following commands:
    (root) NOPASSWD: /usr/bin/example`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "sudo permissions",
          },

          {
            type: "heading",
            text: "Abusing the allowed binary",
          },

          {
            type: "paragraph",
            text: "The allowed binary could be abused to execute commands with elevated privileges.",
          },

          {
            type: "command",
            command: "sudo /usr/bin/example ...",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Root shell",
            caption: "Root access obtained.",
          },
        ],
      },

      {
        title: "Flags",

        blocks: [
          {
            type: "heading",
            text: "User flag",
          },

          {
            type: "command",
            command: "cat /home/user/user.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },

          {
            type: "heading",
            text: "Root flag",
          },

          {
            type: "command",
            command: "cat /root/root.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },
        ],
      },

      {
        title: "Final Thoughts",

        blocks: [
          {
            type: "paragraph",
            text: "Layover was a good example of how web enumeration can eventually lead to local privilege escalation.",
          },

          {
            type: "list",
            items: [
              "Enumerate every exposed service.",
              "Understand the web application's attack surface.",
              "Investigate unusual HTTP behavior.",
              "Enumerate the local system after obtaining a shell.",
              "Always check sudo permissions.",
            ],
          },
        ],
      },
    ],
  },{
    slug: "hack-the-box-layover-writeup-3",

    title: "Hack The Box Layover — Full Writeup",

    description:
      "A complete step-by-step penetration testing walkthrough of the HTB Layover machine.",

    category: "WRITEUP",

    author: {
      name: "Hamza khairi",
      initials: "HK",
    },

    date: "2026-09-26",
    readTime: "35 min read",

    tags: [
      "HackTheBox",
      "Layover",
      "Linux",
      "Medium",
      "Web",
      "Privilege Escalation",
    ],

    cover: "/HTB/Layover.png",

    box: {
      os: "Linux",
      difficulty: "Medium",
      points: 30,
      released: "2026-09-26",
    },

    sections: [
      {
        title: "Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "I started by identifying the target and scanning all available TCP ports.",
          },

          {
            type: "command",
            command: "nmap -sC -sV -p- 10.10.11.20",

            output: `PORT   STATE SERVICE VERSION
22/tcp open  ssh
80/tcp open  http
443/tcp open https`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Nmap scan results",
            caption: "Initial full-port Nmap scan.",
          },

          {
            type: "paragraph",
            text: "The scan revealed SSH and HTTP services, so I decided to investigate the web application first.",
          },
        ],
      },

      {
        title: "Web Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "Opening the HTTP service revealed a web application.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Layover web application",
          },

          {
            type: "heading",
            text: "Directory discovery",
          },

          {
            type: "command",
            command:
              "ffuf -u http://10.10.11.20/FUZZ -w /usr/share/wordlists/dirb/common.txt",

            output: `admin
login
uploads
api`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "FFUF results",
            caption: "Interesting directories discovered with FFUF.",
          },
        ],
      },

      {
        title: "Initial Access",

        blocks: [
          {
            type: "paragraph",
            text: "The application contained an endpoint that allowed interaction with the backend.",
          },

          {
            type: "note",
            title: "Important",
            text: "The vulnerable parameter only worked when the request was sent using the expected HTTP method.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Modified HTTP request",
          },

          {
            type: "code",
            language: "http",
            code: `POST /api/search HTTP/1.1
Host: 10.10.11.20
Content-Type: application/json

{
  "query": "test"
}`,
          },

          {
            type: "paragraph",
            text: "After modifying the request, I obtained the initial foothold.",
          },
        ],
      },

      {
        title: "Shell Stabilization",

        blocks: [
          {
            type: "paragraph",
            text: "The initial shell was unstable, so I upgraded it to a proper interactive shell.",
          },

          {
            type: "command",
            command:
              "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
          },

          {
            type: "command",
            command: "export TERM=xterm",
          },

          {
            type: "paragraph",
            text: "The shell was now much easier to work with.",
          },
        ],
      },

      {
        title: "Privilege Escalation",

        blocks: [
          {
            type: "paragraph",
            text: "I started local enumeration by checking the current user's sudo permissions.",
          },

          {
            type: "command",
            command: "sudo -l",

            output: `User www-data may run the following commands:
    (root) NOPASSWD: /usr/bin/example`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "sudo permissions",
          },

          {
            type: "heading",
            text: "Abusing the allowed binary",
          },

          {
            type: "paragraph",
            text: "The allowed binary could be abused to execute commands with elevated privileges.",
          },

          {
            type: "command",
            command: "sudo /usr/bin/example ...",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Root shell",
            caption: "Root access obtained.",
          },
        ],
      },

      {
        title: "Flags",

        blocks: [
          {
            type: "heading",
            text: "User flag",
          },

          {
            type: "command",
            command: "cat /home/user/user.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },

          {
            type: "heading",
            text: "Root flag",
          },

          {
            type: "command",
            command: "cat /root/root.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },
        ],
      },

      {
        title: "Final Thoughts",

        blocks: [
          {
            type: "paragraph",
            text: "Layover was a good example of how web enumeration can eventually lead to local privilege escalation.",
          },

          {
            type: "list",
            items: [
              "Enumerate every exposed service.",
              "Understand the web application's attack surface.",
              "Investigate unusual HTTP behavior.",
              "Enumerate the local system after obtaining a shell.",
              "Always check sudo permissions.",
            ],
          },
        ],
      },
    ],
  },{
    slug: "hack-the-box-layover-writeup-4",

    title: "Hack The Box Layover — Full Writeup",

    description:
      "A complete step-by-step penetration testing walkthrough of the HTB Layover machine.",

    category: "WRITEUP",

    author: {
      name: "Hamza khairi",
      initials: "HK",
    },

    date: "2026-09-26",
    readTime: "35 min read",

    tags: [
      "HackTheBox",
      "Layover",
      "Linux",
      "Medium",
      "Web",
      "Privilege Escalation",
    ],

    cover: "/HTB/Layover.png",

    box: {
      os: "Linux",
      difficulty: "Medium",
      points: 30,
      released: "2026-09-26",
    },

    sections: [
      {
        title: "Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "I started by identifying the target and scanning all available TCP ports.",
          },

          {
            type: "command",
            command: "nmap -sC -sV -p- 10.10.11.20",

            output: `PORT   STATE SERVICE VERSION
22/tcp open  ssh
80/tcp open  http
443/tcp open https`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Nmap scan results",
            caption: "Initial full-port Nmap scan.",
          },

          {
            type: "paragraph",
            text: "The scan revealed SSH and HTTP services, so I decided to investigate the web application first.",
          },
        ],
      },

      {
        title: "Web Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "Opening the HTTP service revealed a web application.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Layover web application",
          },

          {
            type: "heading",
            text: "Directory discovery",
          },

          {
            type: "command",
            command:
              "ffuf -u http://10.10.11.20/FUZZ -w /usr/share/wordlists/dirb/common.txt",

            output: `admin
login
uploads
api`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "FFUF results",
            caption: "Interesting directories discovered with FFUF.",
          },
        ],
      },

      {
        title: "Initial Access",

        blocks: [
          {
            type: "paragraph",
            text: "The application contained an endpoint that allowed interaction with the backend.",
          },

          {
            type: "note",
            title: "Important",
            text: "The vulnerable parameter only worked when the request was sent using the expected HTTP method.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Modified HTTP request",
          },

          {
            type: "code",
            language: "http",
            code: `POST /api/search HTTP/1.1
Host: 10.10.11.20
Content-Type: application/json

{
  "query": "test"
}`,
          },

          {
            type: "paragraph",
            text: "After modifying the request, I obtained the initial foothold.",
          },
        ],
      },

      {
        title: "Shell Stabilization",

        blocks: [
          {
            type: "paragraph",
            text: "The initial shell was unstable, so I upgraded it to a proper interactive shell.",
          },

          {
            type: "command",
            command:
              "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
          },

          {
            type: "command",
            command: "export TERM=xterm",
          },

          {
            type: "paragraph",
            text: "The shell was now much easier to work with.",
          },
        ],
      },

      {
        title: "Privilege Escalation",

        blocks: [
          {
            type: "paragraph",
            text: "I started local enumeration by checking the current user's sudo permissions.",
          },

          {
            type: "command",
            command: "sudo -l",

            output: `User www-data may run the following commands:
    (root) NOPASSWD: /usr/bin/example`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "sudo permissions",
          },

          {
            type: "heading",
            text: "Abusing the allowed binary",
          },

          {
            type: "paragraph",
            text: "The allowed binary could be abused to execute commands with elevated privileges.",
          },

          {
            type: "command",
            command: "sudo /usr/bin/example ...",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Root shell",
            caption: "Root access obtained.",
          },
        ],
      },

      {
        title: "Flags",

        blocks: [
          {
            type: "heading",
            text: "User flag",
          },

          {
            type: "command",
            command: "cat /home/user/user.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },

          {
            type: "heading",
            text: "Root flag",
          },

          {
            type: "command",
            command: "cat /root/root.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },
        ],
      },

      {
        title: "Final Thoughts",

        blocks: [
          {
            type: "paragraph",
            text: "Layover was a good example of how web enumeration can eventually lead to local privilege escalation.",
          },

          {
            type: "list",
            items: [
              "Enumerate every exposed service.",
              "Understand the web application's attack surface.",
              "Investigate unusual HTTP behavior.",
              "Enumerate the local system after obtaining a shell.",
              "Always check sudo permissions.",
            ],
          },
        ],
      },
    ],
  },{
    slug: "hack-the-box-layover-writeup-5",

    title: "Hack The Box Layover — Full Writeup",

    description:
      "A complete step-by-step penetration testing walkthrough of the HTB Layover machine.",

    category: "WRITEUP",

    author: {
      name: "Hamza khairi",
      initials: "HK",
    },

    date: "2026-09-26",
    readTime: "35 min read",

    tags: [
      "HackTheBox",
      "Layover",
      "Linux",
      "Medium",
      "Web",
      "Privilege Escalation",
    ],

    cover: "/HTB/Layover.png",

    box: {
      os: "Linux",
      difficulty: "Medium",
      points: 30,
      released: "2026-09-26",
    },

    sections: [
      {
        title: "Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "I started by identifying the target and scanning all available TCP ports.",
          },

          {
            type: "command",
            command: "nmap -sC -sV -p- 10.10.11.20",

            output: `PORT   STATE SERVICE VERSION
22/tcp open  ssh
80/tcp open  http
443/tcp open https`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Nmap scan results",
            caption: "Initial full-port Nmap scan.",
          },

          {
            type: "paragraph",
            text: "The scan revealed SSH and HTTP services, so I decided to investigate the web application first.",
          },
        ],
      },

      {
        title: "Web Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "Opening the HTTP service revealed a web application.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Layover web application",
          },

          {
            type: "heading",
            text: "Directory discovery",
          },

          {
            type: "command",
            command:
              "ffuf -u http://10.10.11.20/FUZZ -w /usr/share/wordlists/dirb/common.txt",

            output: `admin
login
uploads
api`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "FFUF results",
            caption: "Interesting directories discovered with FFUF.",
          },
        ],
      },

      {
        title: "Initial Access",

        blocks: [
          {
            type: "paragraph",
            text: "The application contained an endpoint that allowed interaction with the backend.",
          },

          {
            type: "note",
            title: "Important",
            text: "The vulnerable parameter only worked when the request was sent using the expected HTTP method.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Modified HTTP request",
          },

          {
            type: "code",
            language: "http",
            code: `POST /api/search HTTP/1.1
Host: 10.10.11.20
Content-Type: application/json

{
  "query": "test"
}`,
          },

          {
            type: "paragraph",
            text: "After modifying the request, I obtained the initial foothold.",
          },
        ],
      },

      {
        title: "Shell Stabilization",

        blocks: [
          {
            type: "paragraph",
            text: "The initial shell was unstable, so I upgraded it to a proper interactive shell.",
          },

          {
            type: "command",
            command:
              "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
          },

          {
            type: "command",
            command: "export TERM=xterm",
          },

          {
            type: "paragraph",
            text: "The shell was now much easier to work with.",
          },
        ],
      },

      {
        title: "Privilege Escalation",

        blocks: [
          {
            type: "paragraph",
            text: "I started local enumeration by checking the current user's sudo permissions.",
          },

          {
            type: "command",
            command: "sudo -l",

            output: `User www-data may run the following commands:
    (root) NOPASSWD: /usr/bin/example`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "sudo permissions",
          },

          {
            type: "heading",
            text: "Abusing the allowed binary",
          },

          {
            type: "paragraph",
            text: "The allowed binary could be abused to execute commands with elevated privileges.",
          },

          {
            type: "command",
            command: "sudo /usr/bin/example ...",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Root shell",
            caption: "Root access obtained.",
          },
        ],
      },

      {
        title: "Flags",

        blocks: [
          {
            type: "heading",
            text: "User flag",
          },

          {
            type: "command",
            command: "cat /home/user/user.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },

          {
            type: "heading",
            text: "Root flag",
          },

          {
            type: "command",
            command: "cat /root/root.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },
        ],
      },

      {
        title: "Final Thoughts",

        blocks: [
          {
            type: "paragraph",
            text: "Layover was a good example of how web enumeration can eventually lead to local privilege escalation.",
          },

          {
            type: "list",
            items: [
              "Enumerate every exposed service.",
              "Understand the web application's attack surface.",
              "Investigate unusual HTTP behavior.",
              "Enumerate the local system after obtaining a shell.",
              "Always check sudo permissions.",
            ],
          },
        ],
      },
    ],
  },{
    slug: "hack-the-box-layover-writeup-6",

    title: "Hack The Box Layover — Full Writeup",

    description:
      "A complete step-by-step penetration testing walkthrough of the HTB Layover machine.",

    category: "WRITEUP",

    author: {
      name: "Hamza khairi",
      initials: "HK",
    },

    date: "2026-09-26",
    readTime: "35 min read",

    tags: [
      "HackTheBox",
      "Layover",
      "Linux",
      "Medium",
      "Web",
      "Privilege Escalation",
    ],

    cover: "/HTB/Layover.png",

    box: {
      os: "Linux",
      difficulty: "Medium",
      points: 30,
      released: "2026-09-26",
    },

    sections: [
      {
        title: "Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "I started by identifying the target and scanning all available TCP ports.",
          },

          {
            type: "command",
            command: "nmap -sC -sV -p- 10.10.11.20",

            output: `PORT   STATE SERVICE VERSION
22/tcp open  ssh
80/tcp open  http
443/tcp open https`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Nmap scan results",
            caption: "Initial full-port Nmap scan.",
          },

          {
            type: "paragraph",
            text: "The scan revealed SSH and HTTP services, so I decided to investigate the web application first.",
          },
        ],
      },

      {
        title: "Web Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "Opening the HTTP service revealed a web application.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Layover web application",
          },

          {
            type: "heading",
            text: "Directory discovery",
          },

          {
            type: "command",
            command:
              "ffuf -u http://10.10.11.20/FUZZ -w /usr/share/wordlists/dirb/common.txt",

            output: `admin
login
uploads
api`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "FFUF results",
            caption: "Interesting directories discovered with FFUF.",
          },
        ],
      },

      {
        title: "Initial Access",

        blocks: [
          {
            type: "paragraph",
            text: "The application contained an endpoint that allowed interaction with the backend.",
          },

          {
            type: "note",
            title: "Important",
            text: "The vulnerable parameter only worked when the request was sent using the expected HTTP method.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Modified HTTP request",
          },

          {
            type: "code",
            language: "http",
            code: `POST /api/search HTTP/1.1
Host: 10.10.11.20
Content-Type: application/json

{
  "query": "test"
}`,
          },

          {
            type: "paragraph",
            text: "After modifying the request, I obtained the initial foothold.",
          },
        ],
      },

      {
        title: "Shell Stabilization",

        blocks: [
          {
            type: "paragraph",
            text: "The initial shell was unstable, so I upgraded it to a proper interactive shell.",
          },

          {
            type: "command",
            command:
              "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
          },

          {
            type: "command",
            command: "export TERM=xterm",
          },

          {
            type: "paragraph",
            text: "The shell was now much easier to work with.",
          },
        ],
      },

      {
        title: "Privilege Escalation",

        blocks: [
          {
            type: "paragraph",
            text: "I started local enumeration by checking the current user's sudo permissions.",
          },

          {
            type: "command",
            command: "sudo -l",

            output: `User www-data may run the following commands:
    (root) NOPASSWD: /usr/bin/example`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "sudo permissions",
          },

          {
            type: "heading",
            text: "Abusing the allowed binary",
          },

          {
            type: "paragraph",
            text: "The allowed binary could be abused to execute commands with elevated privileges.",
          },

          {
            type: "command",
            command: "sudo /usr/bin/example ...",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Root shell",
            caption: "Root access obtained.",
          },
        ],
      },

      {
        title: "Flags",

        blocks: [
          {
            type: "heading",
            text: "User flag",
          },

          {
            type: "command",
            command: "cat /home/user/user.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },

          {
            type: "heading",
            text: "Root flag",
          },

          {
            type: "command",
            command: "cat /root/root.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },
        ],
      },

      {
        title: "Final Thoughts",

        blocks: [
          {
            type: "paragraph",
            text: "Layover was a good example of how web enumeration can eventually lead to local privilege escalation.",
          },

          {
            type: "list",
            items: [
              "Enumerate every exposed service.",
              "Understand the web application's attack surface.",
              "Investigate unusual HTTP behavior.",
              "Enumerate the local system after obtaining a shell.",
              "Always check sudo permissions.",
            ],
          },
        ],
      },
    ],
  },{
    slug: "hack-the-box-layover-writeup-7",

    title: "Hack The Box Layover — Full Writeup",

    description:
      "A complete step-by-step penetration testing walkthrough of the HTB Layover machine.",

    category: "WRITEUP",

    author: {
      name: "Hamza khairi",
      initials: "HK",
    },

    date: "2026-09-26",
    readTime: "35 min read",

    tags: [
      "HackTheBox",
      "Layover",
      "Linux",
      "Medium",
      "Web",
      "Privilege Escalation",
    ],

    cover: "/HTB/Layover.png",

    box: {
      os: "Linux",
      difficulty: "Medium",
      points: 30,
      released: "2026-09-26",
    },

    sections: [
      {
        title: "Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "I started by identifying the target and scanning all available TCP ports.",
          },

          {
            type: "command",
            command: "nmap -sC -sV -p- 10.10.11.20",

            output: `PORT   STATE SERVICE VERSION
22/tcp open  ssh
80/tcp open  http
443/tcp open https`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Nmap scan results",
            caption: "Initial full-port Nmap scan.",
          },

          {
            type: "paragraph",
            text: "The scan revealed SSH and HTTP services, so I decided to investigate the web application first.",
          },
        ],
      },

      {
        title: "Web Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "Opening the HTTP service revealed a web application.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Layover web application",
          },

          {
            type: "heading",
            text: "Directory discovery",
          },

          {
            type: "command",
            command:
              "ffuf -u http://10.10.11.20/FUZZ -w /usr/share/wordlists/dirb/common.txt",

            output: `admin
login
uploads
api`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "FFUF results",
            caption: "Interesting directories discovered with FFUF.",
          },
        ],
      },

      {
        title: "Initial Access",

        blocks: [
          {
            type: "paragraph",
            text: "The application contained an endpoint that allowed interaction with the backend.",
          },

          {
            type: "note",
            title: "Important",
            text: "The vulnerable parameter only worked when the request was sent using the expected HTTP method.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Modified HTTP request",
          },

          {
            type: "code",
            language: "http",
            code: `POST /api/search HTTP/1.1
Host: 10.10.11.20
Content-Type: application/json

{
  "query": "test"
}`,
          },

          {
            type: "paragraph",
            text: "After modifying the request, I obtained the initial foothold.",
          },
        ],
      },

      {
        title: "Shell Stabilization",

        blocks: [
          {
            type: "paragraph",
            text: "The initial shell was unstable, so I upgraded it to a proper interactive shell.",
          },

          {
            type: "command",
            command:
              "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
          },

          {
            type: "command",
            command: "export TERM=xterm",
          },

          {
            type: "paragraph",
            text: "The shell was now much easier to work with.",
          },
        ],
      },

      {
        title: "Privilege Escalation",

        blocks: [
          {
            type: "paragraph",
            text: "I started local enumeration by checking the current user's sudo permissions.",
          },

          {
            type: "command",
            command: "sudo -l",

            output: `User www-data may run the following commands:
    (root) NOPASSWD: /usr/bin/example`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "sudo permissions",
          },

          {
            type: "heading",
            text: "Abusing the allowed binary",
          },

          {
            type: "paragraph",
            text: "The allowed binary could be abused to execute commands with elevated privileges.",
          },

          {
            type: "command",
            command: "sudo /usr/bin/example ...",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Root shell",
            caption: "Root access obtained.",
          },
        ],
      },

      {
        title: "Flags",

        blocks: [
          {
            type: "heading",
            text: "User flag",
          },

          {
            type: "command",
            command: "cat /home/user/user.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },

          {
            type: "heading",
            text: "Root flag",
          },

          {
            type: "command",
            command: "cat /root/root.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },
        ],
      },

      {
        title: "Final Thoughts",

        blocks: [
          {
            type: "paragraph",
            text: "Layover was a good example of how web enumeration can eventually lead to local privilege escalation.",
          },

          {
            type: "list",
            items: [
              "Enumerate every exposed service.",
              "Understand the web application's attack surface.",
              "Investigate unusual HTTP behavior.",
              "Enumerate the local system after obtaining a shell.",
              "Always check sudo permissions.",
            ],
          },
        ],
      },
    ],
  },{
    slug: "hack-the-box-layover-writeup-8",

    title: "Hack The Box Layover — Full Writeup",

    description:
      "A complete step-by-step penetration testing walkthrough of the HTB Layover machine.",

    category: "WRITEUP",

    author: {
      name: "Hamza khairi",
      initials: "HK",
    },

    date: "2026-09-26",
    readTime: "35 min read",

    tags: [
      "HackTheBox",
      "Layover",
      "Linux",
      "Medium",
      "Web",
      "Privilege Escalation",
    ],

    cover: "/HTB/Layover.png",

    box: {
      os: "Linux",
      difficulty: "Medium",
      points: 30,
      released: "2026-09-26",
    },

    sections: [
      {
        title: "Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "I started by identifying the target and scanning all available TCP ports.",
          },

          {
            type: "command",
            command: "nmap -sC -sV -p- 10.10.11.20",

            output: `PORT   STATE SERVICE VERSION
22/tcp open  ssh
80/tcp open  http
443/tcp open https`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Nmap scan results",
            caption: "Initial full-port Nmap scan.",
          },

          {
            type: "paragraph",
            text: "The scan revealed SSH and HTTP services, so I decided to investigate the web application first.",
          },
        ],
      },

      {
        title: "Web Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "Opening the HTTP service revealed a web application.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Layover web application",
          },

          {
            type: "heading",
            text: "Directory discovery",
          },

          {
            type: "command",
            command:
              "ffuf -u http://10.10.11.20/FUZZ -w /usr/share/wordlists/dirb/common.txt",

            output: `admin
login
uploads
api`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "FFUF results",
            caption: "Interesting directories discovered with FFUF.",
          },
        ],
      },

      {
        title: "Initial Access",

        blocks: [
          {
            type: "paragraph",
            text: "The application contained an endpoint that allowed interaction with the backend.",
          },

          {
            type: "note",
            title: "Important",
            text: "The vulnerable parameter only worked when the request was sent using the expected HTTP method.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Modified HTTP request",
          },

          {
            type: "code",
            language: "http",
            code: `POST /api/search HTTP/1.1
Host: 10.10.11.20
Content-Type: application/json

{
  "query": "test"
}`,
          },

          {
            type: "paragraph",
            text: "After modifying the request, I obtained the initial foothold.",
          },
        ],
      },

      {
        title: "Shell Stabilization",

        blocks: [
          {
            type: "paragraph",
            text: "The initial shell was unstable, so I upgraded it to a proper interactive shell.",
          },

          {
            type: "command",
            command:
              "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
          },

          {
            type: "command",
            command: "export TERM=xterm",
          },

          {
            type: "paragraph",
            text: "The shell was now much easier to work with.",
          },
        ],
      },

      {
        title: "Privilege Escalation",

        blocks: [
          {
            type: "paragraph",
            text: "I started local enumeration by checking the current user's sudo permissions.",
          },

          {
            type: "command",
            command: "sudo -l",

            output: `User www-data may run the following commands:
    (root) NOPASSWD: /usr/bin/example`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "sudo permissions",
          },

          {
            type: "heading",
            text: "Abusing the allowed binary",
          },

          {
            type: "paragraph",
            text: "The allowed binary could be abused to execute commands with elevated privileges.",
          },

          {
            type: "command",
            command: "sudo /usr/bin/example ...",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Root shell",
            caption: "Root access obtained.",
          },
        ],
      },

      {
        title: "Flags",

        blocks: [
          {
            type: "heading",
            text: "User flag",
          },

          {
            type: "command",
            command: "cat /home/user/user.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },

          {
            type: "heading",
            text: "Root flag",
          },

          {
            type: "command",
            command: "cat /root/root.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },
        ],
      },

      {
        title: "Final Thoughts",

        blocks: [
          {
            type: "paragraph",
            text: "Layover was a good example of how web enumeration can eventually lead to local privilege escalation.",
          },

          {
            type: "list",
            items: [
              "Enumerate every exposed service.",
              "Understand the web application's attack surface.",
              "Investigate unusual HTTP behavior.",
              "Enumerate the local system after obtaining a shell.",
              "Always check sudo permissions.",
            ],
          },
        ],
      },
    ],
  },{
    slug: "hack-the-box-layover-writeup-9",

    title: "Hack The Box Layover — Full Writeup",

    description:
      "A complete step-by-step penetration testing walkthrough of the HTB Layover machine.",

    category: "WRITEUP",

    author: {
      name: "Hamza khairi",
      initials: "HK",
    },

    date: "2026-09-26",
    readTime: "35 min read",

    tags: [
      "HackTheBox",
      "Layover",
      "Linux",
      "Medium",
      "Web",
      "Privilege Escalation",
    ],

    cover: "/HTB/Layover.png",

    box: {
      os: "Linux",
      difficulty: "Medium",
      points: 30,
      released: "2026-09-26",
    },

    sections: [
      {
        title: "Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "I started by identifying the target and scanning all available TCP ports.",
          },

          {
            type: "command",
            command: "nmap -sC -sV -p- 10.10.11.20",

            output: `PORT   STATE SERVICE VERSION
22/tcp open  ssh
80/tcp open  http
443/tcp open https`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Nmap scan results",
            caption: "Initial full-port Nmap scan.",
          },

          {
            type: "paragraph",
            text: "The scan revealed SSH and HTTP services, so I decided to investigate the web application first.",
          },
        ],
      },

      {
        title: "Web Enumeration",

        blocks: [
          {
            type: "paragraph",
            text: "Opening the HTTP service revealed a web application.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "Layover web application",
          },

          {
            type: "heading",
            text: "Directory discovery",
          },

          {
            type: "command",
            command:
              "ffuf -u http://10.10.11.20/FUZZ -w /usr/share/wordlists/dirb/common.txt",

            output: `admin
login
uploads
api`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",
            alt: "FFUF results",
            caption: "Interesting directories discovered with FFUF.",
          },
        ],
      },

      {
        title: "Initial Access",

        blocks: [
          {
            type: "paragraph",
            text: "The application contained an endpoint that allowed interaction with the backend.",
          },

          {
            type: "note",
            title: "Important",
            text: "The vulnerable parameter only worked when the request was sent using the expected HTTP method.",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Modified HTTP request",
          },

          {
            type: "code",
            language: "http",
            code: `POST /api/search HTTP/1.1
Host: 10.10.11.20
Content-Type: application/json

{
  "query": "test"
}`,
          },

          {
            type: "paragraph",
            text: "After modifying the request, I obtained the initial foothold.",
          },
        ],
      },

      {
        title: "Shell Stabilization",

        blocks: [
          {
            type: "paragraph",
            text: "The initial shell was unstable, so I upgraded it to a proper interactive shell.",
          },

          {
            type: "command",
            command:
              "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
          },

          {
            type: "command",
            command: "export TERM=xterm",
          },

          {
            type: "paragraph",
            text: "The shell was now much easier to work with.",
          },
        ],
      },

      {
        title: "Privilege Escalation",

        blocks: [
          {
            type: "paragraph",
            text: "I started local enumeration by checking the current user's sudo permissions.",
          },

          {
            type: "command",
            command: "sudo -l",

            output: `User www-data may run the following commands:
    (root) NOPASSWD: /usr/bin/example`,
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "sudo permissions",
          },

          {
            type: "heading",
            text: "Abusing the allowed binary",
          },

          {
            type: "paragraph",
            text: "The allowed binary could be abused to execute commands with elevated privileges.",
          },

          {
            type: "command",
            command: "sudo /usr/bin/example ...",
          },

          {
            type: "image",
            src: "/HTB/IPsecStatus.png",

            alt: "Root shell",
            caption: "Root access obtained.",
          },
        ],
      },

      {
        title: "Flags",

        blocks: [
          {
            type: "heading",
            text: "User flag",
          },

          {
            type: "command",
            command: "cat /home/user/user.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },

          {
            type: "heading",
            text: "Root flag",
          },

          {
            type: "command",
            command: "cat /root/root.txt",
            output: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          },
        ],
      },

      {
        title: "Final Thoughts",

        blocks: [
          {
            type: "paragraph",
            text: "Layover was a good example of how web enumeration can eventually lead to local privilege escalation.",
          },

          {
            type: "list",
            items: [
              "Enumerate every exposed service.",
              "Understand the web application's attack surface.",
              "Investigate unusual HTTP behavior.",
              "Enumerate the local system after obtaining a shell.",
              "Always check sudo permissions.",
            ],
          },
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
 