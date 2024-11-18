import { type ComponentPropsWithoutRef } from "react";

// Dioscriminated union style
type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;
type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

export default function Button(props: ButtonProps | AnchorProps) {
  if (props.el === "anchor") {
    // if (isAnchorProps(props)) {
    // this way in terms of seeking for a prop specific for eg. the ANCHOR
    return <a {...props} className="button"></a>;
  } else {
    return <button {...props} className="button"></button>;
  }
}

// NOT SO GOOD
// attitude using tag specific properties
// type ButtonProps = ComponentPropsWithoutRef<"button"> & {
//   href: never;
// };
// type AnchorProps = ComponentPropsWithoutRef<"a"> & {
//   href?: string;
// };

// function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
//   // THIS IS NEAT HELPER FUNCTION -> "props is AnchorProps" informs TS this function returns true only if props are AnchorProps and false if they are ButtonProps
//   return "href" in props;
// }
