export function Flexible({ children, style={}, isVert=true }) {
    const combinedStyle = {
        height: "100vh",
        width: "100%",
        display: "flex", 

        justifyContent: "center",
        alignItems: "center",
        gap: "5vw",
        flexDirection: isVert ? "column" : "row",
        ...style
    };
    return <section style={combinedStyle}>{children}</section>
  }

  export function Box({ children, style={} }) {
    const combinedStyle = {
        height: "100vh",
        width: "100%",
        ...style
    };
    return <section style={combinedStyle}>{children}</section>
  }

  export function Grid({ children, style={} }) {
    const combinedStyle = {
        height: "100vh",
        width: "100%",
        display: "grid", 
        ...style
    };
    return <section style={combinedStyle}>{children}</section>
  }