/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MessengerProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Messenger extends SvelteComponentTyped<
  MessengerProps,
  {},
  { default: {} }
> {}
