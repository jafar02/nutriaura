const SplashScreen = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg,#fdf2f8,#f3e8ff,#eef2ff)",
      }}
    >
      <img
        src="/logo/nutriaura-logo.png"
        alt="NutriAura"
        style={{
          width: "90px",
          height: "90px",
          marginBottom: "16px",
          animation: "pulse 1.5s infinite",
        }}
      />

      <h2
        style={{
          fontWeight: 700,
          background:
            "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        NutriAura
      </h2>

      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.08); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;
