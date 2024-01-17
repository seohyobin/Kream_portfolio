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
<jsp:setProperty name="userDTO" property="user_addr" />
<jsp:setProperty name="userDTO" property="user_chocheon" />
<jsp:setProperty name="userDTO" property="user_foot_size" />
<jsp:setProperty name="userDTO" property="user_accepted" />
<jsp:setProperty name="userDTO" property="user_my_chocheon_code" />

<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.signUp(userDTO);
%>
{"AJAX실행 DTO & DAO 결과":"<%=result%>"}
