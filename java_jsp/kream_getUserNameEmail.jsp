<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "kream.UserDAO"  %>
<%@ page import = "kream.UserDTO"  %>
<%@ page import = "java.util.*"  %>

<jsp:useBean id="userDTO" class="kream.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id" />

<%
  UserDAO userDAO = new UserDAO();
  UserDTO userDTO2 = new UserDTO();
  userDTO2 = userDAO.getUserNameEmail(userDTO);

    StringBuilder jsonBuilder = new StringBuilder();
    
    jsonBuilder.append("{");
    
    jsonBuilder.append("\"userName\":");
    String userName = userDTO2.getUser_name();
    String jsonUserName = "\"" + userName + "\"" + ",";
    jsonBuilder.append(jsonUserName);
    
    
    jsonBuilder.append("\"userEmail\":");
    String userEmail = userDTO2.getUser_email();
    String jsonUserEmail = "\"" + userEmail + "\"" + ",";
    jsonBuilder.append(jsonUserEmail);
    
    jsonBuilder.append("\"userHp\":");
    String userHp = userDTO2.getUser_hp();
    String jsonUserHp = "\"" + userHp + "\"";
    jsonBuilder.append(jsonUserHp);

    jsonBuilder.append("}");



    String json = jsonBuilder.toString();
  
  
    response.setContentType("application/json");
    response.setCharacterEncoding("UTF-8");
    out.print(json);
%>