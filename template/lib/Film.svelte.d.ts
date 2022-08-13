/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilmProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Film extends SvelteComponentTyped<
  FilmProps,
  {},
  { default: {} }
> {}
