return (body, logic='') => `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="../support.js"></script>
</head>
<body>
<x-dc>
<helmet><meta name="design_doc_mode" content="canvas"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0..1,0&display=block" rel="stylesheet"><style>body{margin:0;background:#ECECF1;font-family:Inter,sans-serif;-webkit-font-smoothing:antialiased}a{color:#0058BE}a:hover{color:#00438F}</style></helmet>
${body}
</x-dc>
</body>
</html>
`;