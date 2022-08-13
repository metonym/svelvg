/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InfoProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Info extends SvelteComponentTyped<
  InfoProps,
  {},
  { default: {} }
> {}
