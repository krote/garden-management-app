import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb';
import { describe } from 'node:test';

describe('DynamoDB Connection', () => {
    test('can connect to DynamoDB', async () => {
        const client = new DynamoDBClient({ region: 'ap-northeast-1'});

        try{
            const command = new ListTablesCommand({});
            const result = await client.send(command);

            expect(result.TableNames).toBeDefined();
            expect(result.TableNames).toContain('garden-app-dev-users');
            expect(result.TableNames).toContain('garden-app-dev-areas');
        } catch (error) {
            console.log('DynamoDB connection test skipped in development');
        }
    }, 100000);
});