import { excerpt } from "@/helpers/utils";
import { useState } from "react";

interface propsType {
  collapsedNumWords?: any;
  text?: any;
  expanded?: any;
  expandButtonText?: any;
  collapseButtonText?: any;
  expandedButtonColor?: any;
  textColor?: any;
}
const TextExpander = ({
  collapsedNumWords = 150,
  text,
  expanded = false,
  expandButtonText = "Show More",
  collapseButtonText = "Show less",
  expandedButtonColor = "text-[#2689FF]",
  textColor = "text-[#FFF]",
}: propsType) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const collapseText = excerpt(text, collapsedNumWords);
  const displayedText = isExpanded ? text : collapseText;
  return (
    <div>
      <span className={`[${textColor}`}>{displayedText}</span>
      <button
        className={`${expandedButtonColor}`}
        onClick={() => setIsExpanded((exp: any) => !exp)}
      >
        <span className="inline-block pl-1">
          {isExpanded ? collapseButtonText : expandButtonText}
        </span>
      </button>
    </div>
  );
};

export default TextExpander;
