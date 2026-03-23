// Nav scroll effect
const nav = document.getElementById( 'nav' );
window.addEventListener( 'scroll', () => {
	nav.classList.toggle( 'nav--scrolled', window.scrollY > 20 );
} );

// Mobile menu toggle
const toggle = document.getElementById( 'nav-toggle' );
const links = document.querySelector( '.nav__links' );
toggle.addEventListener( 'click', () => {
	links.classList.toggle( 'active' );
} );

// Close mobile menu on link click
links.querySelectorAll( 'a' ).forEach( ( link ) => {
	link.addEventListener( 'click', () => {
		links.classList.remove( 'active' );
	} );
} );

// Smooth scroll for anchor links
document.querySelectorAll( 'a[href^="#"]' ).forEach( ( anchor ) => {
	anchor.addEventListener( 'click', ( e ) => {
		const target = document.querySelector( anchor.getAttribute( 'href' ) );
		if ( target ) {
			e.preventDefault();
			target.scrollIntoView( { behavior: 'smooth', block: 'start' } );
		}
	} );
} );

// Animate AEO bars on scroll
const observer = new IntersectionObserver(
	( entries ) => {
		entries.forEach( ( entry ) => {
			if ( entry.isIntersecting ) {
				entry.target
					.querySelectorAll( '.aeo__dim-fill' )
					.forEach( ( bar ) => {
						bar.style.width = bar.style.width;
					} );
				observer.unobserve( entry.target );
			}
		} );
	},
	{ threshold: 0.3 }
);

const aeoSection = document.querySelector( '.aeo__dimensions' );
if ( aeoSection ) {
	observer.observe( aeoSection );
}
