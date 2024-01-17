<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "kream.UserDAO" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="userDTO" class="kream.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id" />
<jsp:setProperty name="userDTO" property="user_pw" />
<%
  UserDAO userDAO = new UserDAO();
  int result = userDAO.login(userDTO.getUser_id(), userDTO.getUser_pw());
  out.print(result);
%>