//package Code_Workouts.JavaWorkouts.JSONParsingFromClientRequest;
//
//import java.io.BufferedReader;
//import java.io.IOException;
//import java.util.List;
//
//public class JsonParsingForListOfValues {
//    List<PojoClass> pojo = null;
//
//    ObjectMapper mapper = new ObjectMapper();
//
//    String line = "";
//    StringBuffer str = new StringBuffer();
//    BufferedReader reader = request.getReader();
//			while((line = reader.readLine()) != null)
//    {
//        str.append(line);
//    }
//	try
//    {
//
//        String temp = str.toString();
//        System.out.println(temp);
//        pojo =  mapper.readValue(temp.getBytes(), List.class);
//    } catch (JsonGenerationException e)
//    {
//        e.printStackTrace();
//    } catch (JsonMappingException e)
//    {
//        e.printStackTrace();
//    } catch (IOException e)
//    {
//        e.printStackTrace();
//    }
//	      System.out.println(pojo);
//}
//}