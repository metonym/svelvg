/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeHtmlProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeHtml extends SvelteComponentTyped<
  FiletypeHtmlProps,
  {},
  { default: {} }
> {}
