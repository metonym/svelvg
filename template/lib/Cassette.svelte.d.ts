/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CassetteProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Cassette extends SvelteComponentTyped<
  CassetteProps,
  {},
  { default: {} }
> {}
