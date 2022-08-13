/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SlackProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Slack extends SvelteComponentTyped<
  SlackProps,
  {},
  { default: {} }
> {}
