import { locales, defaultLocale } from '~/config/i18n.config'
// import { locales, defaultLocale } from './config/i18n.config'

import { defineDocumentType, makeSource } from "contentlayer/source-files";
const Post = defineDocumentType(() => {
  return {
    name: "Post",
    contentType: "mdx",
    filePathPattern: "posts/**/*.mdx",
    fields: {
      title: {
        type: "string",
        required: true,
      },
      language: {
        type: 'enum',
        required: true,
        options: locales,
        default: defaultLocale
      }
    },
  };
});

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
});
