/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeSvgProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeSvg extends SvelteComponentTyped<
  FiletypeSvgProps,
  {},
  { default: {} }
> {}
