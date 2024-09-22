export default function Main( { children,href,color = "text-white" } ) {
	var className = `flex font-bold text-lg md:text-2xl lg:text-3xl min-h-fit text-center bg-tramsparent ${color} ${href ? 'no-underline' : ''}`;
	const style = { fontFamily: 'RobotoSlab' };
	if (href !== null)
		return (
			<a className={className} href={href} style={style}>
				{children}
			</a>
		);
	return (
		<a className={className} style={style}>
			{children}
		</a>
	);
}