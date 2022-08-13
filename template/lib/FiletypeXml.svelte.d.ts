/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeXmlProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeXml extends SvelteComponentTyped<
  FiletypeXmlProps,
  {},
  { default: {} }
> {}
