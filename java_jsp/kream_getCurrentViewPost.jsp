<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "kream.AnnouncementDAO"  %>
<%@ page import = "kream.AnnouncementDTO"  %>
<%@ page import = "java.util.*"  %>

<jsp:useBean id="announcementDTO" class="kream.AnnouncementDTO" scope="page"/>
<jsp:setProperty name="announcementDTO" property="title" />

<%
AnnouncementDAO announcementDAO = new AnnouncementDAO();
AnnouncementDTO announcementDTO2 = new AnnouncementDTO();
announcementDTO2 = announcementDAO.getCurrentViewPost(announcementDTO);

    StringBuilder jsonBuilder = new StringBuilder();
    
    jsonBuilder.append("{");
    
    jsonBuilder.append("\"idx\":");
    int idx = announcementDTO2.getIdx();
    String jsonIdx = "\"" + idx + "\"" + ",";
    jsonBuilder.append(jsonIdx);


    jsonBuilder.append("\"title\":");
    String title = announcementDTO2.getTitle();
    String jsonTitle = "\"" + title + "\"" + ",";
    jsonBuilder.append(jsonTitle);
    
    
    jsonBuilder.append("\"body\":");
    String body = announcementDTO2.getBody();
    String jsonBody = "\"" + body + "\"" + ",";
    jsonBuilder.append(jsonBody);
    
    jsonBuilder.append("\"create_date\":");
    String create_date = announcementDTO2.getCreate_date();
    String jsonCreate_date = "\"" + create_date + "\"";
    jsonBuilder.append(jsonCreate_date);

    jsonBuilder.append("}");



    String json = jsonBuilder.toString();
  
  
    response.setContentType("application/json");
    response.setCharacterEncoding("UTF-8");
    out.print(json);
%>