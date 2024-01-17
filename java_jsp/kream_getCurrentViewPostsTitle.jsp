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
<%@ page import = "java.util.*"  %>

<jsp:useBean id="announcementDTO" class="kream.AnnouncementDTO" scope="page"/>
<jsp:setProperty name="announcementDTO" property="idx" />

<%
  AnnouncementDAO announcementDAO = new AnnouncementDAO();
  List<String> list = new ArrayList<>();
    list = announcementDAO.getCurrentViewPostsTitle(announcementDTO.getIdx());

    StringBuilder jsonBuilder = new StringBuilder();
jsonBuilder.append("[");

    for (int i = 0; i < list.size(); i++) {
    String element = list.get(i);
    String jsonElement = "\"" + element + "\""; // 각 요소를 쌍따옴표로 감싸 JSON 형식으로 만듦
    jsonBuilder.append(jsonElement);

    // 마지막 요소가 아닌 경우 쉼표(,) 추가
    if (i < list.size() - 1) {
        jsonBuilder.append(",");
    }
}

jsonBuilder.append("]");
String json = jsonBuilder.toString();
  
  
    response.setContentType("application/json");
    response.setCharacterEncoding("UTF-8");
    out.print(json);
%>