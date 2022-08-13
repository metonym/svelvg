/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeSqlProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeSql extends SvelteComponentTyped<
  FiletypeSqlProps,
  {},
  { default: {} }
> {}
