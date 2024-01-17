<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>
<%
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
%>

<%@ page import = "kream.UserDAO"  %>
<%@ page import = "kream.UserDTO"  %>
<%@ page import = "kream.MyAuthentication"  %>
<%@ page import = "java.util.*"  %>

<%
  UserDAO userDAO = new UserDAO();

  String number = userDAO.sendEmail();

    out.print(number);
%>