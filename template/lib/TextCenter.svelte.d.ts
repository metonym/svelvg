/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextCenterProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TextCenter extends SvelteComponentTyped<
  TextCenterProps,
  {},
  { default: {} }
> {}
