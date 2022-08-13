/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeJsonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeJson extends SvelteComponentTyped<
  FiletypeJsonProps,
  {},
  { default: {} }
> {}
