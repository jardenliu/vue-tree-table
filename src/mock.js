export default {
  column: [
    {
      prop: "name",
      label: "名称"
    },
    {
      prop: "id",
      width: 120,
      label: "ID"
    },
    {
      prop: "status",
      label: "状态"
    }
  ],
  data: [
    {
      name: "项目1",
      id: "0",
      status: "不可用"
    },
    {
      name: "项目2",
      id: "2",
      status: "可用",
      hasSubTable: true,
      // 第二层的数据
      data: {
        column: [
          {
            prop: "name",
            label: "二级名称"
          },
          {
            prop: "id",
            width: 120,
            label: "ID"
          },
          {
            prop: "status",
            label: "投资额"
          }
        ],
        data: [
          {
            name: "二级项目1",
            id: "0",
            status: "100亿美金"
          },
          {
            name: "二级项目2",
            id: "2",
            status: "200亿人民币种",
            hasSubTable: true,
            // 第三层数据
            data: {
              column: [
                {
                  prop: "name",
                  label: "三级名称"
                },
                {
                  prop: "id",
                  width: 120,
                  label: "ID"
                },
                {
                  prop: "status",
                  label: "负责人"
                }
              ],
              data: [
                {
                  name: "三级项目1",
                  id: "0",
                  status: "张三"
                },
                {
                  name: "三级项目2",
                  id: "2",
                  status: "李四"
                }
              ]
            }
            // 第三层数据
          }
        ]
      }
      // 第二层的数据
    }
  ]
};
