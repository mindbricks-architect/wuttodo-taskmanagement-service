const { inject } = require("mindbricks-api-face");

module.exports = (app) => {
  const authUrl = (process.env.SERVICE_URL ?? "mindbricks.com").replace(
    process.env.SERVICE_SHORT_NAME,
    "auth",
  );
  const basePath =
    process.env.SERVICE_URL_SUFFIX ?? `/${process.env.SERVICE_SHORT_NAME}-api`;
  const config = {
    basePath: basePath,
    name: "wuttodo - taskManagement",
    brand: {
      name: "wuttodo",
      image: "https://mindbricks.com/favicon.ico",
      moduleName: "taskManagement",
      version: process.env.SERVICE_VERSION || "1.0.0",
    },
    auth: {
      url: authUrl,
      loginPath: "/login",
      logoutPath: "/logout",
      currentUserPath: "/currentuser",
      authStrategy: "external",
      initialAuth: true,
    },
    dataObjects: [
      {
        name: "Task",
        description:
          "A single todo task with a required title. Represents a minimal to-do item for a personal list.",
        reference: {
          tableName: "task",
          properties: [
            {
              name: "title",
              type: "String",
            },
          ],
        },
        endpoints: [
          {
            isAuth: true,
            method: "POST",
            url: `${basePath}/v1/tasks`,
            title: "Create Task",
            query: [],

            body: {
              type: "json",
              content: {
                title: "String",
              },
            },

            parameters: [],
            headers: [],
          },

          {
            isAuth: true,
            method: "PATCH",
            url: `${basePath}/v1/tasks/{taskId}`,
            title: "Update Task",
            query: [],

            body: {
              type: "json",
              content: {
                title: "String",
              },
            },

            parameters: [
              {
                key: "taskId",
                value: "",
                description: "",
              },
            ],
            headers: [],
          },

          {
            isAuth: true,
            method: "DELETE",
            url: `${basePath}/v1/tasks/{taskId}`,
            title: "Delete Task",
            query: [],

            body: {
              type: "json",
              content: {},
            },

            parameters: [
              {
                key: "taskId",
                value: "",
                description: "",
              },
            ],
            headers: [],
          },

          {
            isAuth: true,
            method: "GET",
            url: `${basePath}/v1/tasks/{taskId}`,
            title: "Get Task",
            query: [],

            parameters: [
              {
                key: "taskId",
                value: "",
                description: "",
              },
            ],
            headers: [],
          },

          {
            isAuth: true,
            method: "GET",
            url: `${basePath}/v1/tasks`,
            title: "List Tasks",
            query: [],

            body: {
              type: "json",
              content: {},
            },

            parameters: [],
            headers: [],
          },
        ],
      },
    ],
  };

  inject(app, config);
};
