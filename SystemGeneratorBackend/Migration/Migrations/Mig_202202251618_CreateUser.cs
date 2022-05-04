using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Migration.Migrations
{
    [Migration(202202251618)]
    public class Mig_202202251618_CreateUser : FluentMigrator.Migration
    {
        public override void Up()
        {
            Create.Table("Users")
                .WithColumn("Id").AsInt64().PrimaryKey().Identity()
                .WithColumn("Name").AsString().NotNullable()
                .WithColumn("Surname").AsString().Nullable()
                .WithColumn("Password").AsString().NotNullable()
                .WithColumn("Email").AsString().NotNullable()
                .WithColumn("Role").AsInt32().Nullable()
                .WithColumn("ConnectionDate").AsDateTime().Nullable()
                .WithColumn("ConnectionHost").AsString().Nullable();
        }
        public override void Down()
        {
            Delete.Table("Users");
        }
    }
}
