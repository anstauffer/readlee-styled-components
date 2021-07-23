export type Size = "small" | "medium" | "large";
export const BlueFont = "#0191b2";
export const OrangeFont = "#ff8166";

export const getSize = (font: Size) => {
  switch (font) {
    case "small":
      return "16px";
    case "medium":
      return "24px";
    case "large":
      return "32px";
  }
};
