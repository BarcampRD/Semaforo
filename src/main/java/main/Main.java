package main;


import freemarker.template.Configuration;
import spark.ModelAndView;
import spark.template.freemarker.FreeMarkerEngine;

import static spark.Spark.*;

public class Main {

    public static void main(String[] args) {
        staticFileLocation("/");
        Configuration configuration = new Configuration(Configuration.VERSION_2_3_23);
        configuration.setClassForTemplateLoading(Main.class, "/templates");
        FreeMarkerEngine freeMarkerEngine = new FreeMarkerEngine(configuration);
        port(4569);

        get("/", (request, response) -> new ModelAndView(null, "index.html"), freeMarkerEngine);
    }
}
