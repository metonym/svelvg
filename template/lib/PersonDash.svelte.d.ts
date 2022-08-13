/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonDashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonDash extends SvelteComponentTyped<
  PersonDashProps,
  {},
  { default: {} }
> {}
