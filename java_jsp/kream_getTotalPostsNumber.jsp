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

<%@ page import = "kream.AnnouncementDAO"  %>
<%@ page import = "kream.AnnouncementDTO"  %>
<%@ page import = "java.util.*"  %>

<%
  AnnouncementDAO announcementDAO = new AnnouncementDAO(); 
  AnnouncementDTO announcementDTO = new AnnouncementDTO(); 

  announcementDTO = announcementDAO.getTotalPostsNumber();
  int result = announcementDTO.getIdx();
  out.print(result);
%>