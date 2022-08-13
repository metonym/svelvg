/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonDashFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonDashFill extends SvelteComponentTyped<
  PersonDashFillProps,
  {},
  { default: {} }
> {}
