const NotFound = () => {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                minHeight: "100vh",
                minWidth: "100vw",
            }}
        >
            <h1 style={{ fontSize: "2rem", margin: 0 }}>404 - Page Not Found</h1>
            <p style={{ margin: "1rem 0 0 0" }}>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFound;
