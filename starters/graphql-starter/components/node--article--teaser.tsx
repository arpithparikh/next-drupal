import Image from "next/image"
import Link from "next/link"

import { absoluteUrl, formatDate } from "lib/utils"
import { Article } from "types"

interface NodeArticleTeaserProps {
  node: Partial<Article>
}

export function NodeArticleTeaser({ node, ...props }: NodeArticleTeaserProps) {
  return (
    <article {...props}>
      <Link href={node.path} passHref>
        <a className="no-underline hover:text-blue-600">
          <h2 className="mb-4 text-4xl font-bold">{node.title}</h2>
        </a>
      </Link>
      <div className="mb-4 text-gray-600">
        {node.author?.displayName ? (
          <span>
            Posted by{" "}
            <span className="font-semibold">{node.author.displayName}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span>
      </div>
      {node.image && (
        <figure className="my-4">
          <Image
            src={node.image.url}
            width={768}
            height={480}
            layout="responsive"
            objectFit="cover"
            alt={node.title}
          />
        </figure>
      )}
      <Link href={node.path} passHref>
        <a className="inline-flex items-center px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-100">
          Read article
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 ml-2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </Link>
    </article>
  )
}
