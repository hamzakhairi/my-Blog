export type PostBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
      level?: 3 | 4;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: "command";
      command: string;
      output?: string;
    }
  | {
      type: "code";
      language?: string;
      code: string;
      filename?: string;
    }
  | {
      type: "list";
      items: string[];
      ordered?: boolean;
    }
  | {
      type: "note";
      title?: string;
      text: string;
    }
  | {
      type: "quote";
      text: string;
    };

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

  box?: {
    os: string;
    difficulty: string;
    points: number;
    released: string;
  };
  sections: PostSection[];
};
