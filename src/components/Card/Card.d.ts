import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** 
 * Cards contain content and actions about a single subject 
 *
 *  Props:hover, elevation, hoverElevation, classes
 * 
 * Example:
 * <script>
 * 	import {
 * 		Card,
 * 		Button,
 * 		Image
 * 	} from 'smelte';
 * </script>
 * 
 * <Card.Card>
 * 	<div slot="title">
 * 		<Card.Title
 * 			title="The three little kittens"
 * 			subheader="A kitten poem"
 * 			avatar="https://placekitten.com/64/64"
 * 		/>
 * 	</div>
 * 	<div slot="media">
 * 		<Image
 * 			class="w-full"
 * 			src="https://placekitten.com/300/200"
 * 			alt="kitty"
 * 		/>
 * 	</div>
 * 	<div slot="text" class="p-5 pb-0 pt-3 text-gray-700 body-2">
 * 		The three little kittens, they lost their mittens,<br>
 * 		And they began to cry,<br>
 * 		"Oh, mother dear, we sadly fear,<br>
 * 		That we have lost our mittens."
 * 	</div>
 * 	<div slot="actions">
 * 		<div class="p-2">
 * 			<Button text>OK</Button>
 * 			<Button text>Meow</Button>
 * 		</div>
 * 	</div>
 * </Card.Card>
*/
export default class Card extends SvelteTypedComponent<CardProps, CardEvents, CardSlots> {
}
declare const _CardProps: {
    /** Enable hover elevation.
     * 
     * Default: true
     */
    hover?: boolean;
    /** Default elevation value.
     * 
     * Default: 1 */    
    elevation?: number;
    /** Hover elevation value.
     * 
     * Default: 8
     */
    hoverElevation?: number;
    /** String of root element classes.
     * 
     * Default: "rounded inline-flex flex-col overflow-hidden duration-200 ease-in"
     */
    classes?: string|((s:string)=>string);
} & SvelteAllProps;
declare const _CardEvents: {};
declare const _CardSlots: {
    title: {};
    media: {};
    default: {};
    text: {};
    actions: {};
};
export declare type CardProps = typeof _CardProps;
export declare type CardEvents = typeof _CardEvents;
export declare type CardSlots = typeof _CardSlots;
export {};
