import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType {
  classes?: {
    root?: any;
    image?: any;
    body?: any;
    title?: any;
    desc?: any;
    author?: any;
    ImgWrapper?: any;
    cat?: any;
  };
  data?: any;
  type?: any;
}
const BlogCard = ({ classes, data, type }: propsType) => {
  return (
    <Link
      href={`${
        type == "secure"
          ? `/author/blog/canadian-guide`
          : `/knowledge/canadian-guide`
      }`}
      className={`grid lg:grid-cols-[270px_1fr] items-center gap-4 group hover:text-inherit ${
        classes?.root ? classes.root : ``
      }`}
    >
      <div className={`${classes?.ImgWrapper ? classes.ImgWrapper : ``}`}>
        <Image
          src={data?.imgSrc}
          alt="Blog Card"
          width={370}
          height={540}
          className={`w-full ${classes?.image ? classes.image : ``}`}
        />
      </div>

      <div
        className={`flex flex-col gap-[6px] ${
          classes?.body ? classes.body : ``
        }`}
      >
        {data?.cat && (
          <p className={`mb-0 text-black ${classes?.cat ? classes.cat : ``}`}>
            {data?.cat}
          </p>
        )}

        {data?.title && (
          <h3
            className={`mb-0 group-hover:text-primary transition-all line-clamp-2 ${
              classes?.title ? classes.title : ``
            }`}
          >
            {data?.title}
          </h3>
        )}

        {data?.author && (
          <p
            className={`mb-0 text-black ${
              classes?.author ? classes.author : ``
            }`}
          >
            {data?.author}
          </p>
        )}

        {data?.desc && (
          <p
            className={`text-xs mb-0 text-inherit group-hover:text-inherit line-clamp-2 ${
              classes?.desc ? classes.desc : ``
            }`}
          >
            {data?.desc}
          </p>
        )}
      </div>
    </Link>
  );
};

export default BlogCard;
