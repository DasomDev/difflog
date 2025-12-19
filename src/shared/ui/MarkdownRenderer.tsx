import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <div className="max-w-none prose prose-lg prose-gray">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="mt-8 mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="mt-6 mb-3 text-2xl font-bold text-orange-700 dark:text-orange-300" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-4 leading-relaxed text-gray-800 dark:text-gray-200" {...props} />
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            return inline ? (
              <code className="px-1.5 py-0.5 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-sm border border-orange-100 dark:border-orange-800" {...props}>
                {children}
              </code>
            ) : (
              <code className={`block font-mono text-sm whitespace-pre ${className || ''}`} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ node, children, ...props }: any) => {
            return (
              <pre className="overflow-x-auto p-4 my-4 text-gray-100 dark:text-gray-200 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-700 dark:border-gray-600 shadow-lg" {...props}>
                {children}
              </pre>
            );
          },
          a: ({ node, ...props }: any) => (
            <a className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="mb-4 space-y-2 list-disc list-inside text-gray-800 dark:text-gray-200" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="mb-4 space-y-2 list-decimal list-inside text-gray-800 dark:text-gray-200" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="pl-4 my-4 italic text-gray-700 dark:text-gray-300 border-l-4 border-orange-300 dark:border-orange-600" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

