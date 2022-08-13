/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GithubProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Github extends SvelteComponentTyped<
  GithubProps,
  {},
  { default: {} }
> {}
