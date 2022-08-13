/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MicrosoftTeamsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MicrosoftTeams extends SvelteComponentTyped<
  MicrosoftTeamsProps,
  {},
  { default: {} }
> {}
