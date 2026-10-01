/** Add only projects approved for public display. Keep project facts verifiable. */
export interface Project {
	name: Record<"es" | "en", string>;
	description: Record<"es" | "en", string>;
	category: Record<"es" | "en", string>;
	technologies: string[];
	status?: string;
	url?: string;
	repository?: string;
	image?: string;
}

export const projects: Project[] = [];
