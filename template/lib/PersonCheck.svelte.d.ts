/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonCheck extends SvelteComponentTyped<
  PersonCheckProps,
  {},
  { default: {} }
> {}
