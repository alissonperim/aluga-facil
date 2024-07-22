import { MigrationInterface, QueryRunner } from 'typeorm'

export class Migration1721617547202 implements MigrationInterface {
  name = 'Migration1721617547202'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "addresses" ("id" character varying(31) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" character varying(120), "updated_by" character varying(120), "deleted_by" character varying(120), "street" character varying(120) NOT NULL, "number" character varying(20) NOT NULL, "neighborhood" character varying(120) NOT NULL, "city" character varying(60) NOT NULL, "state" character varying(60) NOT NULL, "country" character varying(60) NOT NULL, "zip_code" character varying(9) NOT NULL, "complement" character varying(120), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TYPE "public"."users_maritalstatus_enum" AS ENUM('single', 'married', 'divorced', 'widowed')`,
    )
    await queryRunner.query(
      `CREATE TABLE "users" ("id" character varying(31) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" character varying(120), "updated_by" character varying(120), "deleted_by" character varying(120), "name" character varying(120), "last_name" character varying(120), "phone_number" character varying(14) NOT NULL, "email" character varying(120) NOT NULL, "document" character varying(11) NOT NULL, "birth_date" date, "addressId" character varying NOT NULL, "maritalStatus" "public"."users_maritalstatus_enum" NOT NULL, CONSTRAINT "UQ_17d1817f241f10a3dbafb169fd2" UNIQUE ("phone_number"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_c1b20b2a1883ed106c3e746c25a" UNIQUE ("document"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_17d1817f241f10a3dbafb169fd" ON "users" ("phone_number") `)
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `)
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_c1b20b2a1883ed106c3e746c25" ON "users" ("document") `)
    await queryRunner.query(`CREATE TYPE "public"."fees_type_enum" AS ENUM('absolute', 'percentage')`)
    await queryRunner.query(
      `CREATE TABLE "fees" ("id" character varying(31) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" character varying(120), "updated_by" character varying(120), "deleted_by" character varying(120), "description" character varying(120) NOT NULL, "name" character varying(120) NOT NULL, "amount" numeric NOT NULL, "type" "public"."fees_type_enum" NOT NULL, CONSTRAINT "PK_97f3a1b1b8ee5674fd4da93f461" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "contracts" ("id" character varying(31) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" character varying(120), "updated_by" character varying(120), "deleted_by" character varying(120), "locators_ids" text NOT NULL, "properties_ids" text NOT NULL, "renter_id" character varying(31) NOT NULL, "fees_ids" text NOT NULL, "document" character varying(120) NOT NULL, "start_date" date NOT NULL, "end_date" date NOT NULL, "automatic_renewal" boolean NOT NULL, "locatorsId" character varying(31), "renterId" character varying(31), CONSTRAINT "PK_2c7b8f3a7b1acdd49497d83d0fb" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "renters" ("id" character varying(31) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" character varying(120), "updated_by" character varying(120), "deleted_by" character varying(120), "name" character varying(120), "last_name" character varying(120), "phone_number" character varying(14) NOT NULL, "email" character varying(120) NOT NULL, "document" character varying(11) NOT NULL, "birth_date" date, "addressId" character varying NOT NULL, "is_real_state" boolean NOT NULL DEFAULT false, "fantasy_name" character varying(120), "contracts_ids" text, "rent_properties_ids" text, CONSTRAINT "UQ_bf26c2b8e777b5432a479b52684" UNIQUE ("phone_number"), CONSTRAINT "UQ_78931857cf20f84e434894b07ff" UNIQUE ("email"), CONSTRAINT "UQ_c5e233aeb91b7bee0c36c31eb0f" UNIQUE ("document"), CONSTRAINT "UQ_c5e233aeb91b7bee0c36c31eb0f" UNIQUE ("document"), CONSTRAINT "REL_4d86941e63babca598037f59cb" UNIQUE ("addressId"), CONSTRAINT "PK_6227c974d2f3c7ce77f208147ca" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_bf26c2b8e777b5432a479b5268" ON "renters" ("phone_number") `)
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_78931857cf20f84e434894b07f" ON "renters" ("email") `)
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_c5e233aeb91b7bee0c36c31eb0" ON "renters" ("document") `)
    await queryRunner.query(
      `CREATE TYPE "public"."properties_type_enum" AS ENUM('casa germinada', 'sobrado', 'bangalô', 'edícula', 'apartamento', 'kitnet', 'flat', 'loft', 'studio')`,
    )
    await queryRunner.query(
      `CREATE TABLE "properties" ("id" character varying(31) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" character varying(120), "updated_by" character varying(120), "deleted_by" character varying(120), "addressId" character varying(31) NOT NULL, "owners_ids" text NOT NULL, "renterId" character varying(31), "contractId" character varying(31), "dimension" numeric, "description" character varying(360), "rental_price" numeric NOT NULL, "type" "public"."properties_type_enum" NOT NULL, "insurance_required" boolean NOT NULL, "guarantor_required" boolean NOT NULL, CONSTRAINT "PK_2d83bfa0b9fcd45dee1785af44d" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "owners" ("id" character varying(31) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" character varying(120), "updated_by" character varying(120), "deleted_by" character varying(120), "name" character varying(120), "last_name" character varying(120), "phone_number" character varying(14) NOT NULL, "email" character varying(120) NOT NULL, "document" character varying(11) NOT NULL, "birth_date" date, "addressId" character varying NOT NULL, "properties_ids" text, CONSTRAINT "UQ_7f29c1ccae990d8dd6a865c6765" UNIQUE ("phone_number"), CONSTRAINT "UQ_df4ef717018c5dc7bd3f4ab0de5" UNIQUE ("email"), CONSTRAINT "UQ_dce1d2a570c1d8eb7db6e01f374" UNIQUE ("document"), CONSTRAINT "REL_11e60a57c5ab007f7d72823fc2" UNIQUE ("addressId"), CONSTRAINT "PK_42838282f2e6b216301a70b02d6" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_7f29c1ccae990d8dd6a865c676" ON "owners" ("phone_number") `)
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_df4ef717018c5dc7bd3f4ab0de" ON "owners" ("email") `)
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_dce1d2a570c1d8eb7db6e01f37" ON "owners" ("document") `)
    await queryRunner.query(
      `CREATE TABLE "contracts_fees_fees" ("contractsId" character varying(31) NOT NULL, "feesId" character varying(31) NOT NULL, CONSTRAINT "PK_7c6722bb8741d2964428b0d22cd" PRIMARY KEY ("contractsId", "feesId"))`,
    )
    await queryRunner.query(`CREATE INDEX "IDX_df463218bcf2063e0296718906" ON "contracts_fees_fees" ("contractsId") `)
    await queryRunner.query(`CREATE INDEX "IDX_6fc8e12714988edd4873010b2a" ON "contracts_fees_fees" ("feesId") `)
    await queryRunner.query(
      `CREATE TABLE "owners_properties_properties" ("ownersId" character varying(31) NOT NULL, "propertiesId" character varying(31) NOT NULL, CONSTRAINT "PK_a4c6acf8fda96892c90e905b41f" PRIMARY KEY ("ownersId", "propertiesId"))`,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_59ed89d832471213206c7f4f52" ON "owners_properties_properties" ("ownersId") `,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_b0fb0c6c4f40c58e8374db7795" ON "owners_properties_properties" ("propertiesId") `,
    )
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "contracts" ADD CONSTRAINT "FK_5917570f837e61a9bcae92ea9d4" FOREIGN KEY ("locatorsId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "contracts" ADD CONSTRAINT "FK_e4affd0cc7f05a74bb7d29ec1c9" FOREIGN KEY ("renterId") REFERENCES "renters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "renters" ADD CONSTRAINT "FK_4d86941e63babca598037f59cb2" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "properties" ADD CONSTRAINT "FK_ebcdadb5bd9664aeb606536e4c2" FOREIGN KEY ("renterId") REFERENCES "renters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "properties" ADD CONSTRAINT "FK_f9f06fb859d8f37625721d7f92c" FOREIGN KEY ("contractId") REFERENCES "contracts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "owners" ADD CONSTRAINT "FK_11e60a57c5ab007f7d72823fc25" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "contracts_fees_fees" ADD CONSTRAINT "FK_df463218bcf2063e02967189067" FOREIGN KEY ("contractsId") REFERENCES "contracts"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "contracts_fees_fees" ADD CONSTRAINT "FK_6fc8e12714988edd4873010b2ac" FOREIGN KEY ("feesId") REFERENCES "fees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "owners_properties_properties" ADD CONSTRAINT "FK_59ed89d832471213206c7f4f520" FOREIGN KEY ("ownersId") REFERENCES "owners"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "owners_properties_properties" ADD CONSTRAINT "FK_b0fb0c6c4f40c58e8374db7795a" FOREIGN KEY ("propertiesId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "owners_properties_properties" DROP CONSTRAINT "FK_b0fb0c6c4f40c58e8374db7795a"`,
    )
    await queryRunner.query(
      `ALTER TABLE "owners_properties_properties" DROP CONSTRAINT "FK_59ed89d832471213206c7f4f520"`,
    )
    await queryRunner.query(`ALTER TABLE "contracts_fees_fees" DROP CONSTRAINT "FK_6fc8e12714988edd4873010b2ac"`)
    await queryRunner.query(`ALTER TABLE "contracts_fees_fees" DROP CONSTRAINT "FK_df463218bcf2063e02967189067"`)
    await queryRunner.query(`ALTER TABLE "owners" DROP CONSTRAINT "FK_11e60a57c5ab007f7d72823fc25"`)
    await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_f9f06fb859d8f37625721d7f92c"`)
    await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_ebcdadb5bd9664aeb606536e4c2"`)
    await queryRunner.query(`ALTER TABLE "renters" DROP CONSTRAINT "FK_4d86941e63babca598037f59cb2"`)
    await queryRunner.query(`ALTER TABLE "contracts" DROP CONSTRAINT "FK_e4affd0cc7f05a74bb7d29ec1c9"`)
    await queryRunner.query(`ALTER TABLE "contracts" DROP CONSTRAINT "FK_5917570f837e61a9bcae92ea9d4"`)
    await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_b0fb0c6c4f40c58e8374db7795"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_59ed89d832471213206c7f4f52"`)
    await queryRunner.query(`DROP TABLE "owners_properties_properties"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_6fc8e12714988edd4873010b2a"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_df463218bcf2063e0296718906"`)
    await queryRunner.query(`DROP TABLE "contracts_fees_fees"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_dce1d2a570c1d8eb7db6e01f37"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_df4ef717018c5dc7bd3f4ab0de"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_7f29c1ccae990d8dd6a865c676"`)
    await queryRunner.query(`DROP TABLE "owners"`)
    await queryRunner.query(`DROP TABLE "properties"`)
    await queryRunner.query(`DROP TYPE "public"."properties_type_enum"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_c5e233aeb91b7bee0c36c31eb0"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_78931857cf20f84e434894b07f"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_bf26c2b8e777b5432a479b5268"`)
    await queryRunner.query(`DROP TABLE "renters"`)
    await queryRunner.query(`DROP TABLE "contracts"`)
    await queryRunner.query(`DROP TABLE "fees"`)
    await queryRunner.query(`DROP TYPE "public"."fees_type_enum"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_c1b20b2a1883ed106c3e746c25"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_17d1817f241f10a3dbafb169fd"`)
    await queryRunner.query(`DROP TABLE "users"`)
    await queryRunner.query(`DROP TYPE "public"."users_maritalstatus_enum"`)
    await queryRunner.query(`DROP TABLE "addresses"`)
  }
}
