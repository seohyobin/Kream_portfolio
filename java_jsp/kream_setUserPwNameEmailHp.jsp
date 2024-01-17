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
<jsp:setProperty name="userDTO" property="user_name" />
<jsp:setProperty name="userDTO" property="user_email" />
<jsp:setProperty name="userDTO" property="user_hp" />

<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.setUserPwNameEmailHp(userDTO);
    out.print(result);
%>

