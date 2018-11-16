package main;


import freemarker.template.Configuration;
import spark.ModelAndView;
import spark.template.freemarker.FreeMarkerEngine;

import static spark.Spark.*;

public class Main {

    static int puerto = 4569;

    public static void main(String[] args) {
        staticFileLocation("/");
        Configuration configuration = new Configuration(Configuration.VERSION_2_3_23);
        configuration.setClassForTemplateLoading(Main.class, "/templates");
        FreeMarkerEngine freeMarkerEngine = new FreeMarkerEngine(configuration);
        if(args.length > 0){
           puerto =  Integer.parseInt(args[0]);
        }
        System.out.println("Puerto por indicado: "+puerto);
        port(puerto);

        get("/", (request, response) -> new ModelAndView(null, "index.html"), freeMarkerEngine);
    }
}
